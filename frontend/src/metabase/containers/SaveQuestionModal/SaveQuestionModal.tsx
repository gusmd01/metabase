import {
  LLMSuggestionQuestionInfo,
  SaveQuestionForm,
  SaveQuestionTitle,
} from "metabase/components/SaveQuestionForm";
import { SaveQuestionProvider } from "metabase/components/SaveQuestionForm/context";
import type {
  SaveQuestionFormProps,
  SaveQuestionProps,
} from "metabase/components/SaveQuestionForm/types";
import { Flex, Modal } from "metabase/ui";

export const SaveQuestionModal = ({
  initialCollectionId,
  multiStep,
  onCancel,
  onCreate,
  onSave,
  originalQuestion,
  question,
}: SaveQuestionProps & SaveQuestionFormProps) => (
  <SaveQuestionProvider
    question={question}
    originalQuestion={originalQuestion}
    onCreate={onCreate}
    onSave={onSave}
    multiStep={multiStep}
    initialCollectionId={initialCollectionId}
  >
    <Modal.Root onClose={onCancel} opened={true} padding="40px">
      <Modal.Overlay />
      <Modal.Content data-testid="save-question-modal">
        <Modal.Header
          mb={20}
          style={{
            background: "#F9F9F9",
            fontWeight: 500,
            padding: "28px 40px",
          }}
        >
          <Modal.Title
            style={{ fontWeight: 500, fontSize: 20, color: "#101223" }}
          >
            <SaveQuestionTitle />
          </Modal.Title>
          <Flex align="center" justify="flex-end" gap="sm">
            <LLMSuggestionQuestionInfo />
            <Modal.CloseButton size={24} style={{ color: "#000" }} />
          </Flex>
        </Modal.Header>
        <Modal.Body>
          <SaveQuestionForm onCancel={onCancel} />
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  </SaveQuestionProvider>
);
