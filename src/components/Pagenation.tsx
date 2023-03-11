import { FC } from 'react'

type Props = {
  index: number
  setIndex: (offset: number) => void
}

const Pagenation: FC<Props> = ({ index, setIndex }) => {
  return (
    <nav aria-label="Page navigation">
      <ul className="inline-flex -space-x-px">
        <li>
          <button 
            disabled={index <= 0}
            className="px-3 py-2 ml-0 leading-tight border rounded-l-lg bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
            onClick={() => setIndex(index - 1)}
            >
              Previous
          </button>
        </li>
        <li>
          <button 
            className="px-3 py-2 ml-0 leading-tight border rounded-r-lg bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
            onClick={() => setIndex(index + 1)}
            >
              Next
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Pagenation