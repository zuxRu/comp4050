import React from "react";
import { useDocTitle } from "../../components/general/useDocTitle";
import { title } from "../../utils/urlString";

export default function Academics({isOpen}) {
  useDocTitle(`${title}: Academic`);
  return <div>Academics</div>;
}
