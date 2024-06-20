import { RotatingLines } from 'react-loader-spinner'
const Loader = () => {
    return (
        <>
            <center>
                <table align='center' className='loader' >
                    <tr>
                        <td align='center'>
                            <RotatingLines
                                visible={true}
                                height="96"
                                width="96"
                                color="black"
                                strokeWidth="5"
                                animationDuration="0.75"
                                ariaLabel="rotating-lines-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                            />

                        </td>
                    </tr>
                </table>
            </center>
        </>
    )
}
export default Loader;

