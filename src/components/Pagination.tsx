import * as React from 'react'
import { GatsbyLinkProps, Link } from 'gatsby'
import { times } from 'lodash'
import './Pagination.scss'

interface PaginationProps extends React.HTMLProps<HTMLDivElement> {
  pathname: string
  Link: React.ComponentClass<GatsbyLinkProps<any>>
  pageCount: number
}

export default (props: PaginationProps) => {
  const { pageCount } = props
  if (pageCount === 1) return null
  const activeItem = props.pathname.startsWith('/blog/page') ? props.pathname.split('/')[3] : '1'

  return (
    <div className="pagination">
      {times(pageCount, index => {
        const pageIndex = (index + 1).toString()
        const rangeStep = pageCount < 10 ? 5 : 3
        const isInRange = +pageIndex - rangeStep < +activeItem && +activeItem && +pageIndex + rangeStep > +activeItem
        const isLastPage = +pageIndex === pageCount
        const isFirstPage = +pageIndex === 1
        if (isInRange || isFirstPage || isLastPage) {
          return (
            <props.Link
              key={pageIndex}
              style={{ cursor: 'pointer' }}
              to={+pageIndex == 1 ? '/' : `/blog/page/${pageIndex}/`}
              activeClassName={'active'}
            >
              {pageIndex}
            </props.Link>
          )
        } else {
          return +pageIndex === props.pageCount - 1 || +pageIndex === 2 ? <span>...</span> : null
        }
      })}
    </div>
  )
}
