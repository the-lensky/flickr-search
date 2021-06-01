import {useContext} from 'react'
import {ImageContext} from '../../contex/state'

const Pagination = () => {

    const {responseData, setNextPage, setPrevPage, currentPage} = useContext(ImageContext)

    const {pages} = responseData

    const disablePrevBtn = currentPage < 2 ? true : false

    const disableNextBtn = currentPage >= pages ? true : false

    return (
        // <div>
        //     <button disabled={disablePrevBtn} onClick={setPrevPage}>PREV</button>
        //     <span>{`Page ${currentPage} of ${pages}`}</span>
        //     <button disabled={disableNextBtn} onClick={setNextPage}>NEXT</button>
        // </div>

        <ul className="pagination ">
            <li className="disabled">
                <button
                    disabled={disablePrevBtn}
                    className='btn grey darken-4'
                    onClick={setPrevPage}
                >
                    <i className="material-icons">
                        chevron_left</i>
                </button>
            </li>
            <li className="grey darken-4">{`Page ${currentPage} of ${pages}`}</li>
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