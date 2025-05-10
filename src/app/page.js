import HomePage from './home/page'
import SkillsPage from './skills/page'
import ExperiencePage from './experience/page'
import ContactPage from './contact/page'

export default function Home() {
  return (
    <div>
      <HomePage />
      <ExperiencePage className='h-screen' />
      <SkillsPage className='h-screen' />
      <ContactPage className='h-screen' />
    </div>
  )
}
