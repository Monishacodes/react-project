<div> 
{Data.map((post => {
                   return (
                       <div className="col-sm-6">
                       <div className="article mb-60">
                       <div className={`article-img  text-center ${this.props.cards.artColor }`}>
                       <img src={post.imgUrl} alt="" />
                   </div>
                   <div className="article-content">
                       <h3 className="text-sans  mt-0 mb-10">{post.contentHeading}</h3>
                       <p className="article-content-subtitle mb-10  mt-0 text-orange">{post.contentSubheading}</p>
                       <p className="article-content-text mb-10  mt-0">{post.contentText}</p>
                   </div>
                   </div>
               </div> 
           
                   )
               }))}
</div>