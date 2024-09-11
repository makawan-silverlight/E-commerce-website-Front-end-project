import { ChangeEvent, useState } from "react";

type priceProp = {
    fieldMax: (n: number) => void
    fieldMin: (n: number) => void
}

function priceFilter(prop: priceProp) {

    const { fieldMax, fieldMin } = prop
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(37000);
    const [minStamp, setMinStamp] = useState(0);
    const [maxStamp, setMaxStamp] = useState(0);

    function handleMinPrice(e: ChangeEvent<HTMLInputElement>) {
        const current = e.target.value
        if (!isNaN(Number(current))) {
            const newMinPrice = Math.min(Number(current), maxPrice - 3000)

            setMinPrice(newMinPrice);

            let percent = ((newMinPrice - 0) / (37000 - 100)) * 100

            if (percent > 9) {
                percent = percent * 0.9
                setMinStamp(percent)
            } else {
                setMinStamp(percent)
            }

        }

    }

    function handleMaxPrice(e: ChangeEvent<HTMLInputElement>) {
        const current = e.target.value
        if (!isNaN(Number(current))) {

            let newMaxPrice = Math.max(Number(current), minPrice + 3000)

            if (newMaxPrice > 37000) {
                newMaxPrice = 37000
            }

            setMaxPrice(newMaxPrice);

            let percent = 100 - (((newMaxPrice - 100) / (37000 - 100)) * 100)
            if (percent > 9) {
                percent = percent * 0.9
                setMaxStamp(percent)
            } else {
                setMaxStamp(percent)
            }
        }

    }

    return (
        <div className=" p-4 border-b-2">
            <div className=" block mb-8 text-lg font-semibold uppercase ">Price</div>
            <div className="relative max-w-xl w-full">
                <div>
                    <input type="range"
                        onMouseUp={() => { fieldMin(Number(minPrice)) }}
                        step="100"
                        min={0}
                        max={37000}
                        value={minPrice}
                        onChange={handleMinPrice}
                        className="absolute pointer-events-none appearance-none z-40 h-2 w-full opacity-0 cursor-pointer" />

                    <input type="range"
                        onMouseUp={() => { fieldMax(Number(maxPrice)) }}
                        step="100"
                        min={0}
                        max={37000}
                        value={maxPrice}
                        onChange={handleMaxPrice}
                        className="absolute pointer-events-none appearance-none z-40 h-2 w-full opacity-0 cursor-pointer" />

                    <div className="relative z-10 h-2">
                        <div className="absolute z-10 left-0 right-0 bottom-0 top-0 rounded-md bg-secondary"></div>
                        <div className="absolute z-20 top-0 bottom-0 rounded-md bg-primary" style={{ left: `${minStamp}%`, right: `${maxStamp}%` }} ></div>
                        <div className="absolute z-30 w-6 h-6 top-0 left-0 bg-thirdary border-4 border-header rounded-full -mt-2 " style={{ left: `${minStamp}%` }}></div>
                        <div className="absolute z-30 w-6 h-6 top-0 right-0 bg-thirdary border-4 border-header rounded-full -mt-2 " style={{ right: `${maxStamp}%` }} ></div>
                    </div>

                </div>

                <div className="flex justify-between items-center pt-8 gap-2">
                    <div className="flex justify-center items-center gap-2">
                        <span>Min</span>
                        <input type="text" maxLength={5} value={minPrice} disabled className="px-3 py-1 border bg-white border-gray-200 rounded-full w-20 text-center font-serif" />
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <span>Max</span>
                        <input type="text" maxLength={5} value={maxPrice} disabled className="px-3 py-1 border bg-white border-gray-200 rounded-full w-20 text-center font-serif" />
                    </div>
                </div>

            </div>

        </div>

    )
}

export default priceFilter