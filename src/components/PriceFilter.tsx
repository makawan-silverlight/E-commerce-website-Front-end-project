


function priceFilter() {

    
    return (


    <div className="w-full">
        <input className="w-full h-2 cursor-pointer rounded-full appearance-none" style={{ background: `linear-gradient(to right,#010851 ${0 * 100}%,#d1d5db ${0 * 100}%)` }} type="range" min={0} max={1000} value={50} />
        {/* Timer */}
        <div className="flex justify-between">
            <span>0</span>
            <span>1000</span>
        </div>
    </div>
    )
}

export default priceFilter