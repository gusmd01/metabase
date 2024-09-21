import { t } from "ttag";

import { useCreateCollectionMutation } from "metabase/api";
import FormFooter from "metabase/core/components/FormFooter";
import {
  Form,
  FormErrorMessage,
  FormProvider,
  FormSubmitButton,
  FormTextInput,
} from "metabase/forms";
import { Button, Flex, Modal } from "metabase/ui";
import type { CollectionId } from "metabase-types/api";

import { ENTITY_PICKER_Z_INDEX } from "../../EntityPicker";
import type { CollectionPickerItem } from "../types";

import { StyledContainer } from "./NewCollectionDialog.styled";

interface NewCollectionDialogProps {
  isOpen: boolean;
  onClose: () => void;
  parentCollectionId: CollectionId | null;
  onNewCollection: (item: CollectionPickerItem) => void;
  namespace?: "snippets";
}

export const NewCollectionDialog = ({
  isOpen,
  onClose,
  parentCollectionId,
  onNewCollection,
  namespace,
}: NewCollectionDialogProps) => {
  const [createCollection] = useCreateCollectionMutation();

  const onCreateNewCollection = async ({ name }: { name: string }) => {
    const newCollection = await createCollection({
      name,
      parent_id: parentCollectionId === "root" ? null : parentCollectionId,
      namespace,
    }).unwrap();

    onNewCollection({ ...newCollection, model: "collection" });
    onClose();
  };

  return (
    <Modal.Root
      onClose={onClose}
      opened={isOpen}
      data-testid="create-collection-on-the-go"
      trapFocus={true}
      className="data-pick-modal"
      zIndex={ENTITY_PICKER_Z_INDEX}
    >
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
            {t`Create a new collection`}
          </Modal.Title>
          <Flex align="center" justify="flex-end" gap="sm">
            <Modal.CloseButton size={24} style={{ color: "#000" }} />
          </Flex>
        </Modal.Header>
        <Modal.Body>
          <StyledContainer>
            <FormProvider
              initialValues={{ name: "" }}
              onSubmit={onCreateNewCollection}
            >
              {({ dirty }: { dirty: boolean }) => (
                <Form>
                  <FormTextInput
                    name="name"
                    label={t`Give it a name`}
                    placeholder={t`My new collection`}
                    mb="1rem"
                    labelProps={{ my: "0.5rem" }}
                    data-autofocus
                  />
                  <FormFooter>
                    <FormErrorMessage inline />
                    <Flex style={{ flexShrink: 1 }} justify="flex-end" gap="sm">
                      <Button
                        type="button"
                        onClick={onClose}
                        className="btn"
                      >{t`Cancel`}</Button>
                      <FormSubmitButton
                        type="submit"
                        label={t`Create`}
                        disabled={!dirty}
                        variant="filled"
                        className="btn save-btn"
                      />
                    </Flex>
                  </FormFooter>
                </Form>
              )}
            </FormProvider>
          </StyledContainer>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};
