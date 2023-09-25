import { projects } from '@/utils/projects';
import styles from './styles.module.css'
import Project from '@/components/Project';

const Projects = () => {

   return (
        <div className={styles["projects"]}>
            {projects.map(project => (
                <Project
                    key={project.alt}
                    alt={project.alt}
                    codeDirection={project.codeDirection}
                    description={project.description}
                    href={project.href}
                    image={project.image}
                    title={project.title}
                />
            ))}
        </div>
    );
}

export default Projects;
