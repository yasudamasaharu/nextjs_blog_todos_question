import Layout from '../components/Layout';
import Link from 'next/link';

export default function TaskPage(){
  return (
    <Layout title="Task page">
      <Link href="/main-page">
        <div className="flex cursor-pointer mt-12">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 mr-3" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth={2}
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7" 
            />
          </svg>
          <span>Back to main page</span>
        </div>
      </Link>
    </Layout>
  )
}