import React from "react";
import { useDocTitle } from "../../components/general/useDocTitle";
import { title } from "../../utils/urlString";

export default function Convenor({isOpen}) {
  useDocTitle(`${title}: Convenor`);
  return <div>Convenor</div>;
}
