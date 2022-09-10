const Joi = require("joi")
const { validationStrings } = require("@kimchinese/shared")

module.exports = Joi.object({
  username: Joi.string().alphanum().required().messages({
    "any.required": validationStrings.missingUsername,
    "string.alphanum": validationStrings.invalidUsername,
  }),
  "vocab-source": Joi.string().valid("excel", "starter").required().messages({
    "any.only": validationStrings.invalidVocabSource,
    "any.required": validationStrings.missingVocabSource,
  }),
  "starter-pack": Joi.array()
    .items(Joi.string().valid("hsk1", "hsk2", "hsk3", "hsk4", "hsk5", "hsk6"))
    .when("vocab-source", { is: "starter", then: Joi.required() })
    .messages({
      "array.base": validationStrings.invalidStarterPackFormat,
      "array.includes": validationStrings.invalidStarterPackValues,
      "any.required": validationStrings.missingStarter,
    }),
  file: Joi.object({
    mimetype: Joi.string()
      .valid(
        "application/vnd.ms-excel",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "text/csv"
      )
      .required()
      .messages({
        "any.only": validationStrings.invalidFileType,
      }),
    fieldname: Joi.string().valid("excel-file").required(),
  })
    .unknown()
    .when("vocab-source", { is: "excel", then: Joi.required() })
    .messages({
      "any.required": validationStrings.missingFile,
    }),
  contactType: Joi.string().valid("EMAIL", "SMS").required().messages({
    "any.only": validationStrings.invalidNotifValue,
    "any.required": validationStrings.missingNotif,
  }),
  email: Joi.string()
    .email({ minDomainSegments: 1 })
    .when("contactType", { is: "EMAIL", then: Joi.required() })
    .messages({
      "string.email": validationStrings.invalidEmail,
      "any.required": validationStrings.missingEmail,
    }),
  sms: Joi.string()
    .pattern(/^\+(?:[0-9] ?){6,14}[0-9]$/)
    .when("contactType", { is: "SMS", then: Joi.required() })
    .messages({
      "string.pattern.base": validationStrings.invalidPhone,
      "any.required": validationStrings.missingPhone,
    }),
  isoTime: Joi.string().isoDate().required().messages({
    "string.isoDate": validationStrings.invalidIsoDate,
    "any.required": validationStrings.missingIsoDate,
  }),
  IANA: Joi.string().required().messages({
    "any.required": validationStrings.missingIANA,
  }),
})
  .xor("email", "sms")
  .xor("starter-pack", "file")
  .required()
