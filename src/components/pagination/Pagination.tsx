import {useContext} from 'react'
import {ImageContext} from '../../contex/state'

import './Pagination.css'

const Pagination = () => {

    const {responseData, setNextPage, setPrevPage, currentPage} = useContext(ImageContext)

    const {pages} = responseData

    const disablePrevBtn = currentPage < 2 ? true : false

    const disableNextBtn = currentPage >= pages ? true : false

    return (

        <ul className="pagination pagination-wrapper">

            {!disablePrevBtn
                ? <li className=" waves-effect ">
                    <button
                        disabled={disablePrevBtn}
                        className='btn grey darken-4'
                        onClick={setPrevPage}
                    >
                        <i className="material-icons">
                            chevron_left</i>
                    </button>
                </li>
                : null
            }

            <li className="grey darken-4 page-counter">{`Page ${currentPage} of ${pages}`}</li>
            <li
                className="waves-effect">
                <button
                    disabled={disableNextBtn}
                    className='btn grey darken-4'
                    onClick={setNextPage}
                >
                    <i className="material-icons">
                        chevron_right
                    </i>
                </button>
            </li>
        </ul>
    )
}

export default Pagination


{/*<ul className="pagination ">*/
}
{/*    <li ><button  onClick={setPrevPage} disabled={disablePrevBtn ? 'disabled' : ''}><i className="material-icons">chevron_left</i></button></li>*/
}
{/*    <li className="active"><a href="#">{`Page ${page} of ${totalPageCount}`}</a></li>*/
}
{/*    <li ><button  onClick={setNextPage} disabled={disableNextBtn ? 'disabled' : ''}><i className="material-icons">chevron_right</i></button></li>*/
}
{/*</ul>*/
}