import { SIDEBAR_DATA } from "@/layout/components/sidebar/sidebar-data";
import { LogoAndBanner } from "@/layout/components/logo";

export function SideBar(props: Record<string, any>) {
  const { isContentAreaExpanded } = props;
  return (
    <>
      <div className="w-full p-2">
        <div className="">
          <LogoAndBanner />
        </div>
        <div>
          <h4>MENU</h4>
          <ul className="w-full flex flex-col gap-1 overflow-y-auto overflow-x-hidden min-h-[70vh] max-h-[70vh] custom-scrollbar">
            {Array(5)
              .fill(SIDEBAR_DATA[0])
              ?.map((menu: Record<string, any>, i: number) =>
                isContentAreaExpanded ? (
                  <li className="w-full p-4 rounded-sm" key={i}>
                    {menu.icon}
                  </li>
                ) : (
                  <li className="w-full flex flex-row p-4 rounded-sm" key={i}>
                    {menu.icon}&nbsp; {menu?.name}
                  </li>
                )
              )}
          </ul>
          <hr className="border-[1px] border-gray" />
          <div>
            <h1>Logout</h1>
          </div>
        </div>
      </div>
    </>
  );
}
