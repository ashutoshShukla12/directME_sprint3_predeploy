import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.css';
import { UserProvider } from '../context/UserContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <UserProvider>
                    {children}
                </UserProvider>
            </body>
        </html>
    );
}