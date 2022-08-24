import React from 'react'
import {DiscussionEmbed} from "disqus-react"
import {} from "disqus-react"

const DisqusComments = () => {
  const disqusShortname = "your-disqus-shortname"

  const disqusConfig = {
    url: 'https://aliaboalshamlat-disqus-com.disqus.com/embed.js',
    setAttribute:('data-timestamp', +new Date())
  }

  return (
    <div>
      
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
      <div id="dsq-count-scr" src="aliaboalshamlat-disqus-com.disqus.com/count.js" async></div>
    </div>
    
  )
}
export const displayDisqusComments = () => {
    <DisqusComments> </DisqusComments>
}
