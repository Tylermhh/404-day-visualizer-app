import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

const HomeProgressBar: React.FC<{}> = () => {
    return (
        <div>
            <h5>
                % Tasks Completed Today
            </h5>
            <ProgressBar>
                <ProgressBar striped now={50} />
            </ProgressBar>
        </div>
    )
}

export default HomeProgressBar