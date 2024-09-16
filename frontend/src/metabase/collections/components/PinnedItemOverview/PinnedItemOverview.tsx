import { t } from "ttag";
import _ from "underscore";

import PinDropZone from "metabase/collections/components/PinDropZone";
import PinnedItemCard from "metabase/collections/components/PinnedItemCard";
import PinnedItemSortDropTarget from "metabase/collections/components/PinnedItemSortDropTarget";
import PinnedQuestionCard from "metabase/collections/components/PinnedQuestionCard";
import type {
  CreateBookmark,
  DeleteBookmark,
} from "metabase/collections/types";
import { isPreviewShown, isRootCollection } from "metabase/collections/utils";
import ItemDragSource from "metabase/containers/dnd/ItemDragSource";
import CS from "metabase/css/core/index.css";
import type { IconName } from "metabase/ui";
import { Group, Stack } from "metabase/ui";
import type Database from "metabase-lib/v1/metadata/Database";
import type { Bookmark, Collection, CollectionItem } from "metabase-types/api";

import {
  Container,
  Grid,
  MainBoxContent,
  StyledDescription,
  StyledTitle,
} from "./PinnedItemOverview.styled";

type Props = {
  databases?: Database[];
  bookmarks?: Bookmark[];
  createBookmark: CreateBookmark;
  deleteBookmark: DeleteBookmark;
  items: CollectionItem[];
  collection: Collection;
  onCopy: (items: CollectionItem[]) => void;
  onMove: (items: CollectionItem[]) => void;
};

function PinnedItemOverview({
  databases,
  bookmarks,
  createBookmark,
  deleteBookmark,
  items,
  collection,
  onCopy,
  onMove,
}: Props) {
  const sortedItems = _.sortBy(items, item => item.collection_position);
  const {
    card: cardItems = [],
    dashboard: dashboardItems = [],
    dataset: modelItems = [],
    metric: metricItems = [],
  } = _.groupBy(sortedItems, "model");
  const cardGroups = _.partition(cardItems, isPreviewShown);
  const metricGroups = _.partition(metricItems, isPreviewShown);

  return items.length === 0 ? (
    <Container>
      <PinDropZone variant="pin" empty />
    </Container>
  ) : (
    <Container data-testid="pinned-items">
      <PinDropZone variant="pin" />

      <Stack spacing="1.5rem">
        {metricItems.length > 0 && (
          <div>
            <SectionTitle title={t`Metrics`} icon="metric" />
            {metricGroups.map(
              (cardGroup, cardGroupIndex) =>
                cardGroup.length > 0 && (
                  <Grid key={cardGroupIndex}>
                    {cardGroup.map(item => (
                      <div key={item.id} className={CS.relative}>
                        <PinnedItemSortDropTarget
                          isFrontTarget
                          itemModel="metric"
                          pinIndex={item.collection_position}
                          enableDropTargetBackground={false}
                        />
                        <ItemDragSource item={item} collection={collection}>
                          <div>
                            <PinnedQuestionCard
                              item={item}
                              collection={collection}
                              databases={databases}
                              bookmarks={bookmarks}
                              onCopy={onCopy}
                              onMove={onMove}
                              onCreateBookmark={createBookmark}
                              onDeleteBookmark={deleteBookmark}
                            />
                          </div>
                        </ItemDragSource>
                        <PinnedItemSortDropTarget
                          isBackTarget
                          itemModel="metric"
                          pinIndex={item.collection_position}
                          enableDropTargetBackground={false}
                        />
                      </div>
                    ))}
                  </Grid>
                ),
            )}
          </div>
        )}

        {cardItems.length > 0 && (
          <div>
            <SectionTitle title={t`Pinned questions`} icon="pin" />
            {cardGroups.map(
              (cardGroup, cardGroupIndex) =>
                cardGroup.length > 0 && (
                  <Grid key={cardGroupIndex}>
                    {cardGroup.map(item => (
                      <div key={item.id} className={CS.relative}>
                        <PinnedItemSortDropTarget
                          isFrontTarget
                          itemModel="card"
                          pinIndex={item.collection_position}
                          enableDropTargetBackground={false}
                        />
                        <ItemDragSource item={item} collection={collection}>
                          <div>
                            <PinnedQuestionCard
                              item={item}
                              collection={collection}
                              databases={databases}
                              bookmarks={bookmarks}
                              onCopy={onCopy}
                              onMove={onMove}
                              onCreateBookmark={createBookmark}
                              onDeleteBookmark={deleteBookmark}
                            />
                          </div>
                        </ItemDragSource>
                        <PinnedItemSortDropTarget
                          isBackTarget
                          itemModel="card"
                          pinIndex={item.collection_position}
                          enableDropTargetBackground={false}
                        />
                      </div>
                    ))}
                  </Grid>
                ),
            )}
          </div>
        )}

        {dashboardItems.length > 0 && (
          <div>
            <SectionTitle title={t`Dashboards`} icon="dashboard" />
            <Grid>
              {dashboardItems.map(item => (
                <div key={item.id} className={CS.relative}>
                  <PinnedItemSortDropTarget
                    isFrontTarget
                    itemModel="dashboard"
                    pinIndex={item.collection_position}
                    enableDropTargetBackground={false}
                  />
                  <ItemDragSource item={item} collection={collection}>
                    <div>
                      <PinnedItemCard
                        databases={databases}
                        bookmarks={bookmarks}
                        createBookmark={createBookmark}
                        deleteBookmark={deleteBookmark}
                        item={item}
                        collection={collection}
                        onCopy={onCopy}
                        onMove={onMove}
                      />
                    </div>
                  </ItemDragSource>
                  <PinnedItemSortDropTarget
                    isBackTarget
                    itemModel="dashboard"
                    pinIndex={item.collection_position}
                    enableDropTargetBackground={false}
                  />
                </div>
              ))}
            </Grid>
          </div>
        )}

        {modelItems.length > 0 && (
          <div>
            <SectionTitle
              title={t`Models`}
              icon="model"
              description={
                isRootCollection(collection)
                  ? t`Start new explorations here`
                  : t`Start new explorations about ${collection.name} here`
              }
            />
            <MainBoxContent>
              {modelItems.map(item => (
                <div key={item.id} className={CS.relative}>
                  <PinnedItemSortDropTarget
                    isFrontTarget
                    itemModel="dataset"
                    pinIndex={item.collection_position}
                    enableDropTargetBackground={false}
                  />
                  <ItemDragSource item={item} collection={collection}>
                    <div>
                      <PinnedItemCard
                        databases={databases}
                        bookmarks={bookmarks}
                        createBookmark={createBookmark}
                        deleteBookmark={deleteBookmark}
                        item={item}
                        collection={collection}
                        onCopy={onCopy}
                        onMove={onMove}
                      />
                    </div>
                  </ItemDragSource>
                  <PinnedItemSortDropTarget
                    isBackTarget
                    itemModel="dataset"
                    pinIndex={item.collection_position}
                    enableDropTargetBackground={false}
                  />
                </div>
              ))}
            </MainBoxContent>
          </div>
        )}
      </Stack>
    </Container>
  );
}

interface SectionTitleProps {
  title: string;
  description?: string;
  icon?: IconName;
}

function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <Stack spacing="sm" pb="md" mb="10px">
      <Group spacing="sm">
        <StyledTitle>{title}</StyledTitle>
      </Group>
      {description && <StyledDescription>{description}</StyledDescription>}
    </Stack>
  );
}

// eslint-disable-next-line import/no-default-export -- deprecated usage
export default PinnedItemOverview;
