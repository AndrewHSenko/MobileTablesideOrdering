import CatLink from "./CatLink"

const CatScroll = () => {
  return (
    <div className="overflow-auto px-5 py-1 border border-1 border-lightbg bg-primary bg-opacity-25 rounded-pill">
        <div className="d-flex flex-nowrap gap-5 fs-6 text-secondary">
            <CatLink dest="/popular" text="Popular" />
            <CatLink dest="/sandwiches" text="Sandwiches" />
            <CatLink dest="/salads" text="Salads" />
            <CatLink dest="/sides" text="Sides" />
            <CatLink dest="/beverages" text="Beverages" />
            <div style={{minWidth : "1rem"}} />
        </div>
    </div>
  )
}

export default CatScroll