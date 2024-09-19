

function About() {
  const framework = ['React','TypeScript','TailwindCSS','Axios','React-router-dom','Redux-Toolkit','React-Hook-Form','Swiper','React-Icons']
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <section className="container my-8 relative z-10 flex flex-col gap-4 px-8">
        <div className="flex flex-col md:flex-row gap-12 w-full">
          <div className="w-full md:w-1/2 h-96 max-h-[80vh] md:h-auto rounded-xl overflow-hidden">
            <img className="object-cover" src="https://images.unsplash.com/photo-1623520333087-62b8793e3d23?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="About Picture" />
          </div>
          <div className="w-full text-xl md:w-1/2 flex flex-col gap-6 text-header">
            <h1 className="text-4xl font-bold pb-4 border-b-2 border-header">About Silver Ecommerce Store</h1>
            <div className="flex flex-col gap-4">
              <p className="font-medium">Hello, I'm Makawan This is my Frontend project website.</p>
              <p className="font-medium">API : <span className="font-normal">'https://dummyjson.com/products'</span></p>
              <div className="flex flex-col sm:flex-row gap-4">
                <p className=" font-medium w-[205px] flex-shrink-0">Framework-Library :</p>
                <ul className="ml-6">{framework.map((item,index)=><li className="list-disc" key={index}>{item}</li>)}</ul>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About