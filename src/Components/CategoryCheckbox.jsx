import React from "react";
import { StyledCheckBox } from "Styles/Checkbox";

export default function CategoryCheckBox({ checked, categoryId }) {
  return <StyledCheckBox checked={checked} categoryId={categoryId} />;
}
