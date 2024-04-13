"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { Rss, Sun, Moon } from "react-feather";

import Logo from "@/components/Logo";
import VisuallyHidden from "@/components/VisuallyHidden";

import styles from "./Header.module.css";
import Cookies from "js-cookie";
import { DARK_TOKENS, LIGHT_TOKENS } from "@/constants";

function Header({ theme, className, ...delegated }) {
    const [appliedTheme, setAppliedTheme] = useState(theme);

    const changedThemeFunction = () => {
        const newTheme = appliedTheme === "light" ? "dark" : "light";

        Cookies.set("color-theme", newTheme, {
            expires: 10,
        });

        setAppliedTheme(newTheme);

        const colors = newTheme === "light" ? LIGHT_TOKENS : DARK_TOKENS;

        const rootElement = document.documentElement;

        rootElement.setAttribute("data-color-theme", newTheme);

        Object.entries(colors).forEach(([key, value]) => {
            rootElement.style.setProperty(key, value);
        });
    };

    return (
        <header className={clsx(styles.wrapper, className)} {...delegated}>
            <Logo />

            <div className={styles.actions}>
                <button className={styles.action}>
                    <Rss
                        size="1.5rem"
                        style={{
                            // Optical alignment
                            transform: "translate(2px, -2px)",
                        }}
                    />
                    <VisuallyHidden>View RSS feed</VisuallyHidden>
                </button>
                <button
                    className={styles.action}
                    onClick={changedThemeFunction}
                >
                    {appliedTheme === "dark" ? (
                        <Moon size="1.5rem" />
                    ) : (
                        <Sun size="1.5rem" />
                    )}
                    <VisuallyHidden>Toggle dark / light mode</VisuallyHidden>
                </button>
            </div>
        </header>
    );
}

export default Header;
