import React from "react";
import { useDocTitle } from "../../components/general/useDocTitle";
import { title } from "../../utils/urlString";

export default function AddProject({isOpen}) {
  useDocTitle(`${title}: Add Project`);
  return <div>AddProject</div>;
}
