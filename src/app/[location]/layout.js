/* Components */
import NavigationBar from '@/app/_components/NavigationBar/NavigationBar';

export default function LocationLayout({ children }) {
  return (
    <>
      <NavigationBar />
      {children}
    </>
  );
}
