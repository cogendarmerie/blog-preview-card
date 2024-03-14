import React from "react";

export function BlogPreviewCardWrapper({ children }) {
    return (
        <div className="blog-card-preview-wrapper">
            <div>
                {children}
            </div>
        </div>
    )
}

export function BlogPreviewCardPicture({ src, alt }) {
    return (
        <picture className="blog-card-preview-picture">
            <img src={src} alt={alt} />
        </picture>
    )
}

export function BlogPreviewCardMiddlePart({ children }) {
    return (
        <div className="blog-card-preview-middle-part">
            {children}
        </div>
    )
}

export function BlogPreviewCardCategorie({ children }) {
    return (
        <div>
            <div className="blog-card-preview-category">
                {children}
            </div>
        </div>
    )
}

export function BlogPreviewCardPublished({ children }) {
    return (
        <div className="blog-card-preview-published">
            Published {children}
        </div>
    )
}

export function BlogPreviewCardTitle({ children }) {
    return (
        <div className="blog-card-preview-title">
            <h1>{children}</h1>
        </div>
    )
}

export function BlogPreviewCardDescription({ children }) {
    return (
        <div className="blog-card-preview-description">
            <p>{children}</p>
        </div>
    )
}

export function BlogPreviewCardAuthor({ name, avatar }) {
    return (
        <div className="blog-card-preview-author-wrapper">
            <div className="blog-card-preview-author-picture">
                <img src={avatar} alt={name} />
            </div>
            <div>
                <p>{name}</p>
            </div>
        </div>
    )
}