import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import './Skeleton1.css'
const SkeletonExample1 = () => {
    return (
        <div className="skeleton__1">
            <SkeletonTheme color="#202020" highlightColor="#444">
            <div className="skeleton__Profile__1">
                <Skeleton 
                    count={1}
                    duration={2}
                    delay={2}
                    width={180}
                    height={250}
                />
                <div className="skeleton__Profile__info__1">
                    <Skeleton 
                        count={1}
                        duration={2}
                        delay={1}
                        width={200}
                        height={20}
                    />
                    <Skeleton 
                        style={{marginTop:"25px", marginBottom:"45px"}}
                        count={1}
                        duration={2}
                        delay={1}
                        width={170}
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
                        style={{marginTop:"8px"}}
                        count={1}
                        duration={2}
                        delay={1}
                        width={200}
                        height={20}
                    /> 
                    <Skeleton 
                        style={{marginTop:"38px"}}
                        count={1}
                        duration={2}
                        delay={1}
                        width={185}
                        height={15}
                    /> 
                </div>
            </div>
        </SkeletonTheme>
    </div>
    )
}

export default SkeletonExample1
