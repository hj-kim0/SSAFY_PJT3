package com.ssafy.comssa.aop;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;


@Aspect
@Component
public class LogAspect {

    @Around("execution(* com.ssafy.comssa.controller.*.*(..))")
    public Object ControllerLogger(ProceedingJoinPoint proceedingJoinPoint) throws Throwable, Exception {
        Object result = proceedingJoinPoint.proceed();
        return result;
    }
}
