"use client";

import { Session } from "next-auth";
import { signOut } from "next-auth/react";

type Props = {
  session: null | Session;
};

export const SignOutButton = (props: Props) => {
  return (
    <button
      onClick={() => {
        if (!props.session?.user) return;

        signOut();
      }}
      disabled={props.session?.user ? false : true}
      className={[
        "text-center lg:text-left flex-1 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",
        !props.session?.user && "cursor-not-allowed",
      ].join(" ")}
    >
      <h2 className={`mb-3 text-2xl font-semibold`}>
        Sign out{" "}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>

      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
        {props.session?.user
          ? `Hello ${
              props.session.user.name ? props.session.user.name : "user"
            }, ever thought about signing out?`
          : "You can't try this feature since you're not signed in."}
      </p>
    </button>
  );
};
