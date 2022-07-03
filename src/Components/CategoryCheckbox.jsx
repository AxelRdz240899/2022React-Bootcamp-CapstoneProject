import React from "react";
import PropTypes from "prop-types";

import { StyledCheckBox } from "Styles/Checkbox";

export default function CategoryCheckBox({ checked, categoryId }) {
  return <StyledCheckBox checked={checked} categoryId={categoryId} />;
}

CategoryCheckBox.propTypes = {
  checked: PropTypes.bool.isRequired,
  categoryId: PropTypes.string.isRequired,
};
