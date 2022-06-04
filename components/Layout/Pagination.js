export default ({ paginationData, init, params}) => {
    const handlePrevious = () => {
        params.page = params.page - 1;
        init(params);
    }

    const handleNext = () => {
        params.page = params.page + 1;
        init(params);
    }

    return (
        <div className="flex flex-grow items-center justify-between mt-6">
            <button
                disabled={paginationData?.disablePreviousButton}
                onClick={handlePrevious}
                className="p-2 bg-gray-200 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
            >Previous</button>

            <p>showing {paginationData?.from} to {paginationData?.to} / {paginationData?.total}</p>

            <button
                disabled={paginationData?.disableNextButton}
                onClick={handleNext}
                className="p-2 bg-blue-200 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
            >Next</button>
        </div>
    )
}
