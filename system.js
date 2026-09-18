/* 
  system.js
  The Core Experience Engine for ZimArtist
*/

const ZimSystem = {
    initReveal() {
        const nodes = document.querySelectorAll('.reveal-node:not(.active)');
        nodes.forEach((node, index) => {
            setTimeout(() => {
                node.classList.add('active');
            }, (index + 1) * 60); // Faster reveal
        });
    },

    initFooter() {
        const footer = document.getElementById('system-footer');
        if (footer) {
            setTimeout(() => {
                footer.classList.add('ready');
                footer.classList.add('footer-active');
            }, 2000);
        }
    },

    toast(message) {
        const container = document.getElementById('toast-container');
        if (!container) return;
        
        const toast = document.createElement('div');
        toast.className = "bg-amber-500 text-black px-6 py-3 rounded text-[10px] font-black uppercase tracking-widest opacity-0 translate-y-4 transition-all duration-500";
        toast.innerText = message;
        container.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.remove('opacity-0', 'translate-y-4');
        }, 10);
        
        setTimeout(() => {
            toast.classList.add('opacity-0', 'translate-y-4');
            setTimeout(() => toast.remove(), 500);
        }, 3000);
    },

    toggleBio(show) {
        const modal = document.getElementById('bio-modal');
        if (!modal) return;
        if (show) {
            modal.classList.remove('opacity-0', 'pointer-events-none');
            modal.querySelector('.reveal-node')?.classList.add('active');
        } else {
            modal.classList.add('opacity-0', 'pointer-events-none');
            modal.querySelector('.reveal-node')?.classList.remove('active');
        }
    }
};

window.ZimSystem = ZimSystem;

window.addEventListener('DOMContentLoaded', () => {
    ZimSystem.initReveal();
    ZimSystem.initFooter();
});

// Safety fallback for slow networks or rendering delays
window.onload = () => {
    ZimSystem.initReveal();
};
