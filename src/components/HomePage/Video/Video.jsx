const Video = ()=>{
    return(
        <div className="py-[80px] bg-slate-800">
            <div className="max-w-[1400px] mx-auto w-full">
            <div className="h-[600px]">
                 <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/u9nry4Psey4"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
            </div>
     
            </div>
        </div> 

    )
}
export default Video;