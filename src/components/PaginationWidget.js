import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';

export default function PaginationWidget(props) {
    return (
      <div>
                  <Link to="" onClick={props.previousPage}   className="btn-floating btn-small blue" >

        <i className="fa fa-chevron-circle-left"></i>
      </Link><Link to="" onClick={props.nextPage}  className="btn-floating btn-small blue" >

<i className="fa fa-chevron-circle-right"></i>
</Link>
                </div>
    )
}