const Joi = require("joi");

const validVastPosition_ENUM = [
    "top_left",
    "top_middle",
    "top_right",
    "middle_left",
    "middle_right",
    "bottom_left",
    "bottom_middle",
    "bottom_right" ];

const vastSchema = Joi.object().keys({
    vast_url: Joi.string().required().max(600),
    position:  Joi.string().valid(validVastPosition_ENUM),
    hide_ui:  Joi.boolean().allow('').allow(null).default(false)
  });

  module.exports = vastSchema;