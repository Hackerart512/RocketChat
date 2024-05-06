import React from 'react'

const WrittenChatCard = () => {
  return (
    <>
       <div className="image">
                    
                    <LightGallery
                        speed={500}
                        plugins={[lgThumbnail, lgZoom, lgAutoplay, lgVideo, lgShare, lgRotate]}>


                        <a href="images/a1.jpg">
                            <img alt="img1" src="./images/a1.jpg" />
                        </a>
                        <a href="images/a2.jpg">
                            <img alt="img2" src="./images/a2.jpg" />
                        </a>
                        <a href="images/a3.jpg">
                            <img alt="img3" src="./images/a3.jpg" />
                        </a>
                        <a href="images/a4.jpg">
                            <img alt="img4" src="./images/a4.jpg" />
                        </a>
                    </LightGallery>


                </div>
    </>
  )
}

export default WrittenChatCard
