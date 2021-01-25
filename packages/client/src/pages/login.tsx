import { ISubRoute, withSubRouter } from 'utils/router';

export interface LoginPageProps extends ISubRoute {}

const LoginPage = () => <div>Login Page Placeholder</div>;

export default withSubRouter(LoginPage);
