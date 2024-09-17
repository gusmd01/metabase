import type { MantineThemeOverride } from "@mantine/core";
import type { SyntheticEvent } from "react";

export const DEFAULT_POPOVER_Z_INDEX = 300;

export const getPopoverOverrides = (): MantineThemeOverride["components"] => ({
  Popover: {
    defaultProps: {
      radius: "12px",
      shadow: "md",
      withinPortal: true,
      middlewares: { shift: true, flip: true, size: true },
      transitionProps: { duration: 0 },
      boxShadow: "0px 0px 24px 0px rgba(0, 0, 0, 0.08)",
    },
    styles: () => ({
      dropdown: {
        padding: 0,
        overflow: "auto",
        background: "var(--mb-color-background)",
        borderColor: "#9496A1",
        borderWidth: "0.5px",
        color: "var(--mb-color-text-primary)",
        boxShadow: "0px 0px 24px 0px rgba(0, 0, 0, 0.08)",
      },
    }),
  },
  PopoverDropdown: {
    defaultProps: {
      onMouseDownCapture: (event: SyntheticEvent) => {
        // prevent nested popovers from closing each other
        // see useClickOutside in @mantine/hooks for the reference
        const target = event.target as HTMLElement;
        target.setAttribute("data-ignore-outside-clicks", "true");
      },
    },
  },
});
