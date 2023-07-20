import { cx } from "@chakra-ui/utils"
import { CloseButton, CloseButtonProps } from "../close-button"
import { forwardRef } from "../system"
import { usePopoverContext, usePopoverStyles } from "./popover-context"

export type PopoverCloseButtonProps = CloseButtonProps

export const PopoverCloseButton = forwardRef<CloseButtonProps, "button">(
  function PopoverCloseButton(props, ref) {
    const { onClose } = usePopoverContext()
    const styles = usePopoverStyles()
    return (
      <CloseButton
        size="sm"
        onClick={onClose}
        className={cx("chakra-popover__close-btn", props.className)}
        __css={styles.closeButton}
        ref={ref}
        {...props}
      />
    )
  },
)

PopoverCloseButton.displayName = "PopoverCloseButton"
