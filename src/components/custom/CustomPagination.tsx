import {
  Pagination,
  PaginationItemType,
  PaginationItemRenderProps,
} from "@nextui-org/pagination"

const CustomPagination = () => {
  const renderItem = ({
    ref,
    value,
    isActive,
    onNext,
    onPrevious,
    setPage,
    className,
  }: PaginationItemRenderProps) => {
    if (value === PaginationItemType.NEXT) {
      return (
        <button
          className={`${className} bg-default-200/50 min-w-8 w-8 h-8`}
          onClick={onNext}
        >
          Next
        </button>
      )
    }

    if (value === PaginationItemType.PREV) {
      return (
        <button
          className={`${className} bg-default-200/50 min-w-8 w-8 h-8`}
          onClick={onPrevious}
        >
          Previous
        </button>
      )
    }

    if (value === PaginationItemType.DOTS) {
      return <button className={className}>...</button>
    }
  }

  return (
    <Pagination
      disableCursorAnimation
      showControls
      total={10}
      initialPage={1}
      className="gap-2"
      radius="full"
      renderItem={renderItem}
      variant="light"
    />
  )
}

export default CustomPagination
