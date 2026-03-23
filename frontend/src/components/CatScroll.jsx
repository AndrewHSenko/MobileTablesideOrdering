import CatLink from "./CatLink"

const CatScroll = () => {
  return (
    <div className="overflow-auto px-5 py-1 border border-1 border-lightbg bg-primary bg-opacity-25 rounded-pill">
        <div className="d-flex flex-nowrap gap-5 fs-6 text-secondary">
            <CatLink dest="/food" text="Popular" />
            <CatLink dest="/food" text="Sandwiches" />
            <CatLink dest="/food" text="Salads" />
            <CatLink dest="/food" text="Sides" />
            <CatLink dest="/food" text="Beverages" />
            <div style={{minWidth : "1rem"}} />
        </div>
    </div>
  )
}

export default CatScroll