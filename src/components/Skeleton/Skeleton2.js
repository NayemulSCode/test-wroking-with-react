import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import './Skeleton2.css'
const Skeleton2 = () => {
    return (
        <div className="skeleton__1">
            <SkeletonTheme>
            <div className="skeleton__Profile__1">
                <div className="skeleton__leftSide">
                    <Skeleton 
                        count={1}
                        duration={2}
                        delay={2}
                        width={80}
                        height={80}
                    />
                    <Skeleton
                        style={{marginTop:"5px"}}
                        count={1}
                        duration={2}
                        delay={2}
                        width={100}
                        height={25}
                    />
                </div>
                <div className="skeleton__Profile__info__1">
                    <Skeleton 
                        count={1}
                        duration={2}
                        delay={1}
                        width={150}
                        height={20}
                    />
                    <Skeleton 
                        style={{marginTop:"25px"}}
                        count={1}
                        duration={2}
                        delay={1}
                        width={140}
                        height={10}
                    /> 
                    <Skeleton 
                        count={1}
                        duration={2}
                        delay={1}
                        width={70}
                        height={10}
                    />
                     <Skeleton 
                        count={1}
                        duration={2}
                        delay={1}
                        width={100}
                        height={10}
                    />                   
                </div>
            </div>
        </SkeletonTheme>
    </div>
    )
}

export default Skeleton2
