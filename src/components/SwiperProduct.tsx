import{ Swiper, SwiperSlide } from "swiper/react";

// import swiper style
import "swiper/css";
import "swiper/css/pagination";

// import require module
import { Pagination } from "swiper/modules"; 

function SwiperProduct() {
  return (
    <div className='bg-neutral-950 min-h-screen flex justify-center items-center p-20 px-72'>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{ 
          clickable: true,
         }}
        loop={true}
        modules={[Pagination]}
        className='mySwiper text-white h-[32rem] cursor-pointer'
      >
        <SwiperSlide className='flex flex-col space-y-5'>
          <img src={"https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}></img>  
          <div className='flex justify-between'>
            <span>Planet 1</span>
            <span>7.000.000</span>
          </div>
          <div>
            <span className='text-neutral-200 text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, recusandae alias. Amet enim temporibus impedit omnis culpa cum similique pariatur...
            </span>
          </div>
          <div>
            <span className='text-slate-400'>
              buy planet
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col space-y-5'>
          <img src={"https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}></img>  

          <div className='flex justify-between'>
            <span>Planet 1</span>
            <span>7.000.000</span>
          </div>
          <div>
            <span className='text-neutral-200 text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, recusandae alias. Amet enim temporibus impedit omnis culpa cum similique pariatur...
            </span>
          </div>
          <div>
            <span className='text-slate-400'>
              buy planet
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col space-y-5'>
          <img src={"https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}></img>  

          <div className='flex justify-between'>
            <span>Planet 1</span>
            <span>7.000.000</span>
          </div>
          <div>
            <span className='text-neutral-200 text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, recusandae alias. Amet enim temporibus impedit omnis culpa cum similique pariatur...
            </span>
          </div>
          <div>
            <span className='text-slate-400'>
              buy planet
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col space-y-5'>
          <img src={"https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}></img>  

          <div className='flex justify-between'>
            <span>Planet 1</span>
            <span>7.000.000</span>
          </div>
          <div>
            <span className='text-neutral-200 text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, recusandae alias. Amet enim temporibus impedit omnis culpa cum similique pariatur...
            </span>
          </div>
          <div>
            <span className='text-slate-400'>
              buy planet
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col space-y-5'>
          <img src={"https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}></img>  

          <div className='flex justify-between'>
            <span>Planet 1</span>
            <span>7.000.000</span>
          </div>
          <div>
            <span className='text-neutral-200 text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, recusandae alias. Amet enim temporibus impedit omnis culpa cum similique pariatur...
            </span>
          </div>
          <div>
            <span className='text-slate-400'>
              buy planet
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col space-y-5'>
          <img src={"https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}></img>  

          <div className='flex justify-between'>
            <span>Planet 1</span>
            <span>7.000.000</span>
          </div>
          <div>
            <span className='text-neutral-200 text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, recusandae alias. Amet enim temporibus impedit omnis culpa cum similique pariatur...
            </span>
          </div>
          <div>
            <span className='text-slate-400'>
              buy planet
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col space-y-5'>
          <img src={"https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}></img>  

          <div className='flex justify-between'>
            <span>Planet 1</span>
            <span>7.000.000</span>
          </div>
          <div>
            <span className='text-neutral-200 text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, recusandae alias. Amet enim temporibus impedit omnis culpa cum similique pariatur...
            </span>
          </div>
          <div>
            <span className='text-slate-400'>
              buy planet
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col space-y-5'>
          <img src={"https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}></img>  

          <div className='flex justify-between'>
            <span>Planet 1</span>
            <span>7.000.000</span>
          </div>
          <div>
            <span className='text-neutral-200 text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, recusandae alias. Amet enim temporibus impedit omnis culpa cum similique pariatur...
            </span>
          </div>
          <div>
            <span className='text-slate-400'>
              buy planet
            </span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SwiperProduct