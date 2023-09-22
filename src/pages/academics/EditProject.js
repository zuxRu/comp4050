import React from "react";
import { useDocTitle } from "../../components/general/useDocTitle";
import { title } from "../../utils/urlString";

export default function EditProject({isOpen}) {
  useDocTitle(`${title}: Edit Project`);

  return <div>EditProject</div>;
}
