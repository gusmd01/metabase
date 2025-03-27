import PropTypes from "prop-types";
import { t } from "ttag";

import ViewSection, { ViewHeading } from "./ViewSection";

export default function NewQuestionHeader({ title, ...props }) {
  return (
    <ViewSection {...props}>
      <ViewHeading>{title || t`Pick your starting data`}</ViewHeading>
    </ViewSection>
  );
}

NewQuestionHeader.propTypes = {
  title: PropTypes.string,
};
