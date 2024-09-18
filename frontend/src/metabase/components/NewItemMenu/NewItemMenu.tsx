import type { LocationDescriptor } from "history";
import type { ReactNode } from "react";
import { useMemo } from "react";
import { t } from "ttag";

import EntityMenu from "metabase/components/EntityMenu";
import { useDispatch } from "metabase/lib/redux";
import * as Urls from "metabase/lib/urls";
import { setOpenModal } from "metabase/redux/ui";
import type { CollectionId } from "metabase-types/api";

export interface NewItemMenuProps {
  className?: string;
  collectionId?: CollectionId;
  trigger?: ReactNode;
  triggerIcon?: string;
  triggerTooltip?: string;
  hasModels: boolean;
  hasDataAccess: boolean;
  hasNativeWrite: boolean;
  hasDatabaseWithJsonEngine: boolean;
  hasDatabaseWithActionsEnabled: boolean;
  onCloseNavbar: () => void;
  onChangeLocation: (nextLocation: LocationDescriptor) => void;
}

type NewMenuItem = {
  title: string;
  icon: string;
  link?: LocationDescriptor;
  event?: string;
  action?: () => void;
  onClose?: () => void;
};

const NewItemMenu = ({
  className,
  collectionId,
  trigger,
  triggerIcon,
  triggerTooltip,
  hasModels,
  hasDataAccess,
  hasNativeWrite,
  hasDatabaseWithActionsEnabled,
  onCloseNavbar,
}: NewItemMenuProps) => {
  const dispatch = useDispatch();

  const menuItems = useMemo(() => {
    const items: NewMenuItem[] = [];

    if (hasDataAccess) {
      items.push({
        title: t`Question`,
        icon: "question",
        link: Urls.newQuestion({
          mode: "notebook",
          creationType: "custom_question",
          collectionId,
          cardType: "question",
        }),
        onClose: onCloseNavbar,
      });
    }

    items.push(
      {
        title: t`Dashboard`,
        icon: "arrow_down",
        action: () => dispatch(setOpenModal("dashboard")),
      },
      {
        title: t`Collection`,
        icon: "folder",
        action: () => dispatch(setOpenModal("collection")),
      },
    );

    if (hasNativeWrite) {
      const collectionQuery = collectionId
        ? `?collectionId=${collectionId}`
        : "";

      items.push({
        title: t`Model`,
        icon: "model",
        link: `/model/new${collectionQuery}`,
        onClose: onCloseNavbar,
      });
    }

    if (hasModels && hasDatabaseWithActionsEnabled && hasNativeWrite) {
      items.push({
        title: t`Action`,
        icon: "bolt",
        action: () => dispatch(setOpenModal("action")),
      });
    }

    // if (hasDataAccess) {
    //   items.push({
    //     title: t`Metric`,
    //     icon: "metric",
    //     link: Urls.newQuestion({
    //       mode: "query",
    //       cardType: "metric",
    //       collectionId,
    //     }),
    //     onClose: onCloseNavbar,
    //   });
    // }

    return items;
  }, [
    hasDataAccess,
    hasNativeWrite,
    hasModels,
    hasDatabaseWithActionsEnabled,
    collectionId,
    onCloseNavbar,
    dispatch,
  ]);

  return (
    <EntityMenu
      className={className}
      items={menuItems}
      trigger={trigger}
      triggerIcon={triggerIcon}
      tooltip={triggerTooltip}
      // I've disabled this transition, since it results in the menu
      // sometimes not appearing until content finishes loading on complex
      // dashboards and questions #39303
      // TODO: Try to restore this transition once we upgrade to React 18 and can prioritize this update
      transitionDuration={0}
    />
  );
};

// eslint-disable-next-line import/no-default-export -- deprecated usage
export default NewItemMenu;
