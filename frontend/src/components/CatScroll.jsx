import CatLink from "./CatLink"
import { useHeaderHeight } from "../layouts/HeaderHeightContext.jsx"

const CatScroll = () => {
  const { headerHeight } = useHeaderHeight()
  return (
    <div className="scroll sticky-top overflow-auto px-5 mb-3 py-2 z-3 border-bottom border-1 border-black bg-primary-subtle bg-opacity-25" style={{ top : headerHeight }}>
        <div className="d-flex flex-nowrap gap-5 fs-6 text-primary">
            <CatLink dest="/menu" text="Popular" />
            <CatLink dest="/menu" text="Sandwiches" />
            <CatLink dest="/menu" text="Salads" />
            <CatLink dest="/menu" text="Sides" />
            <CatLink dest="/menu" text="Beverages" />
            <div style={{minWidth : "1rem"}} />
        </div>
    </div>
  )
}

export default CatScroll