import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

function ProjectModal({ isOpen, onClose, project }) {
    // REMOVE THIS LINE: if (!isOpen || !project) return null; // This was causing the error

    // Effect to prevent body scrolling when modal is open
    // This useEffect is now unconditionally called when ProjectModal is rendered.
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            // Only remove no-scroll if the modal is closing (or if it was previously open)
            // This prevents issues if another modal or overlay also uses no-scroll
            if (document.body.classList.contains('no-scroll')) {
                document.body.classList.remove('no-scroll');
            }
        }
        // Cleanup function for when component unmounts or isOpen changes
        return () => {
            // Ensure scroll is re-enabled if modal is open when component unmounts
            if (document.body.classList.contains('no-scroll')) {
                document.body.classList.remove('no-scroll');
            }
        };
    }, [isOpen]); // Re-run this effect when isOpen changes

    // The modal content itself is returned via createPortal
    // Since this component is now only rendered IF isOpen is true by the parent,
    // we don't need the internal null check.
    return createPortal(
        <div className="modal-overlay show" onClick={onClose}>
            <div className="modal-content-wrapper" onClick={(e) => e.stopPropagation()}> {/* Prevent click from closing modal */}
                <button className="modal-close-button" onClick={onClose}>×</button>
                {/* Ensure project is not null before accessing its properties */}
                {project && (
                    <>
                        <h3>{project.title}</h3>
                        {project.image && <img src={project.image} alt={project.title} className="modal-image" loading="lazy" />}
                        <p>{project.fullDescription || project.description}</p>

                        <div className="modal-info-section">
                            <h4>Project Details</h4>
                            <div className="modal-info-grid">
                                {project.date && <div className="modal-info-item"><span className="modal-info-label">Date:</span> <span className="modal-info-value">{project.date}</span></div>}
                                {project.role && <div className="modal-info-item"><span className="modal-info-label">Role:</span> <span className="modal-info-value">{project.role}</span></div>}
                                {project.tools && <div className="modal-info-item"><span className="modal-info-label">Tools:</span> <span className="modal-info-value">{project.tools}</span></div>}
                            </div>
                        </div>

                        <div className="modal-links">
                            {project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="modal-link">GitHub Repo</a>}
                            {project.demoLink && <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="modal-link">Live Demo</a>}
                        </div>
                    </>
                )}
            </div>
        </div>,
        document.body // Append the modal directly to the body
    );
}

export default ProjectModal;