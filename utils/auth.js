import { useEffect } from 'react'
import Router from 'next/router'
import nextCookie from 'next-cookies'
import cookie from 'js-cookie'


export const login = ({ token }) => {
    const expire_time = process.env.COOKIE_TIME_IN_MINS || 10
    const inFifteenMinutes = new Date(new Date().getTime() + expire_time * 60 * 1000);
    cookie.set('token', token, { expires: inFifteenMinutes })
    Router.push('/accounts')
}

export const auth = ctx => {
    const { token } = nextCookie(ctx)
    // If there's no token, it means the user is not logged in.
    if (!token) {
        if (typeof window === 'undefined') {
            ctx.res.writeHead(302, { Location: '/auth/login' })
            ctx.res.end()
        } else {
            Router.push('/auth/login')
        }
    }
    return token
}

export const logout = () => {
    cookie.remove('token')
    // to support logging out from all windows
    window.localStorage.setItem('logout', Date.now())
    Router.push('/auth/login')
}

export const withAuthSync = WrappedComponent => {
    const Wrapper = props => {
        const syncLogout = event => {
            if (event.key === 'logout') {
                console.log('logged out from storage!')
                Router.push('/auth/login')
            }
        }
        useEffect(() => {
            window.addEventListener('storage', syncLogout)
            return () => {
                window.removeEventListener('storage', syncLogout)
                window.localStorage.removeItem('logout')
            }
        }, [])

        return <WrappedComponent {...props} />
    }

    Wrapper.getInitialProps = async ctx => {
        const token = auth(ctx)
        const componentProps =
            WrappedComponent.getInitialProps &&
            (await WrappedComponent.getInitialProps(ctx))
        return { ...componentProps, token }
    }

    return Wrapper
}
