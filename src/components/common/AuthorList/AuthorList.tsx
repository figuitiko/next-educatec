import AuthorBox from './AuthorBox'
import { type SocialAuthor } from './AuthorList.types'
import { AUTHORS } from './config'

const AuthorList = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      {AUTHORS.map((author) => (
        <AuthorBox
          id={author.id}
          key={author.id}
          name={author.name}
          avatar={author.avatar}
          socials={author.socials as SocialAuthor[]}
        />
      ))}
    </div>
  )
}

export default AuthorList
